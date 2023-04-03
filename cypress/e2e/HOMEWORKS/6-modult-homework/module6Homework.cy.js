/// <reference types="cypress" />

let url = "https://jsonplaceholder.typicode.com/posts";
let postToBeUpdated = 100;
let postToBeDeleted = 50;

describe("my first scenario", () => {
  it("User should be able to use GET method", () => {
    cy.request(url).then((response) => {
      const body = JSON.stringify(response.body);
      expect(response.status).to.eq(200);
      cy.log(body);

      // Verify if post with id === numberOfPosts is present in the body
      const numberOfPosts = response.body.length;
      cy.log(numberOfPosts);
      expect(body).to.include(`"id":${numberOfPosts}`);

      // Verify the first element and check if all fields are present
      const firstPostObject = response.body[0];
      cy.log(firstPostObject);
      cy.wrap(firstPostObject).should("have.keys", [
        "userId",
        "id",
        "title",
        "body",
      ]);

      // If we wanted we could check if every object would pass the above mentioned condition
      cy.wrap(response.body).each((post) => {
        expect(post).to.have.all.keys("userId", "id", "title", "body");

        // Verify that each field has a non-null value
        expect(post.userId).to.not.be.null;
        expect(post.id).to.not.be.null;
        expect(post.title).to.not.be.null;
        expect(post.body).to.not.be.null;
      });
    });
  });

  it("User should be able to use POST method", () => {
    cy.request({
      method: "POST",
      url: url,
      body: JSON.stringify({
        title: "Bob",
        body: "The builder",
        userId: 1,
      }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {
      const body = JSON.stringify(response.body);
      expect(response.status).to.eq(201);
      cy.log(body);

      // Verify that the fields we provided in body are the same in response
      expect(body).to.include(`"title":"Bob"`);
      expect(body).to.include(`"body":"The builder"`);
      expect(body).to.include(`"userId":1`);

      // we can hard code that value, because in mocked response new post will always return 101 / no access to database
      // I tried to take the value from GET request and iterate it +1, but it would make POST test case not atomic
      const newlyCreatedPostNumber = 101;
      expect(body).to.include(`"id":${newlyCreatedPostNumber}`);
    });
  });

  it("User should be able to use PUT method", () => {
    // for that test case we should firstly verify the POST before update
    // this would probably work better if it wasn't mocked

    // Save previous values of a given post
    let previousId = 0;
    let previousUserId = 0;
    let previousTitle = "";
    let previousBody = "";

    cy.request(url + "/" + postToBeUpdated).then((response) => {
      const postObject = response.body;
      cy.log(postObject);
      previousId = postObject.id;
      previousUserId = postObject.userId;
      previousTitle = postObject.title;
      previousBody = postObject.title;
      cy.log(previousId, previousUserId, previousTitle, previousBody);
    });

    cy.request({
      method: "PUT",
      url: url + "/" + postToBeUpdated,
      body: JSON.stringify({
        id: postToBeUpdated,
        title: "The",
        body: "Mandalorian",
        userId: 10,
      }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {
      const body = JSON.stringify(response.body);
      const updatedPost = response.body;
      expect(response.status).to.eq(200);
      cy.log(body);

      // Verify that id of the post remains the same
      expect(updatedPost.id).to.eq(previousId);

      // Verify that the rest of the fields are changed and previous values are not present
      expect(updatedPost.title).to.not.eq(previousTitle);
      expect(updatedPost.body).to.not.eq(previousBody);
      expect(updatedPost.userId).to.not.eq(previousTitle);

      // Or just verify that values are just as we set them
      expect(updatedPost.title).to.eq("The");
      expect(updatedPost.body).to.eq("Mandalorian");
      expect(updatedPost.userId).to.eq(10);
    });
  });

  it("User should be able to use DELETE method", () => {
    cy.request("DELETE", url + "/" + postToBeDeleted).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.empty;

      // if it wasn't mocked we could check certain GET /101 object and verify that 404 is returned
      // but this would not work here
    });
  });
});
