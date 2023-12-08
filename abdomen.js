

var user_input = document.getElementById('user_input').value;
document.write('<p>' + user_input + '</p>');

var query = "SELECT * FROM users WHERE username = '" + user_input + "';";

var insecure_random = Math.random();

if (user_role === "admin") {
    grantAdminAccess();
}

const octokit = new Octokit({
  auth: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh'
});

const yandex_cloud_smartcaptcha_server_key = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwMTUzODcxNSwiaWF0IjoxNzAxNTM4NzE1fQ.He5HN68A44uJN1U0jNXo-i88rjUh-Zo28g5mlDAmsow';

await octokit.request('GET /repos/{owner}/{repo}/branches', {
  owner: 'OWNER',
  repo: 'REPO',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

const github_token: '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';
