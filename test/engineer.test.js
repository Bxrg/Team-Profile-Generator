const Engineer = require("../lib/Engineer");

test("Uses constructor to set GitHub user", () => {
  const testValue = "GitHubTest";
  const e = new Engineer("Jonny", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Uses getRole() to return the correct role", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jonny", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Uses getGitHub to get the GitHub name", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jonny", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});