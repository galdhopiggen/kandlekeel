console.log('abdomen');

var user_input = document.getElementById('user_input').value;
document.write('<p>' + user_input + '</p>');

var user_input = "'; DROP TABLE users; --";
var query = "SELECT * FROM users WHERE username = '" + user_input + "';";

var insecure_random = Math.random();

if (user_role === "admin") {
    grantAdminAccess();
}

const octokit = new Octokit({
  auth: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh'
})

await octokit.request('GET /repos/{owner}/{repo}/branches', {
  owner: 'OWNER',
  repo: 'REPO',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
