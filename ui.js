class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"> View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Websites/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Show userrepos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
            <div class="card card-body">
                <div class="row">
                    <div class = "col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary mt-2 mb-2">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success mb-2">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        // Output Repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show Alert Message
    showAlert(message, className) {
        // Clear any remaining alert
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3secs
        setTimeout(() => {
            this.clearAlert();
        }, 1000);
    }

    // Clear Alert Message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}