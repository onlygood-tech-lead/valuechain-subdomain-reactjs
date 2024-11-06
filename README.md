## Deployment Workflow

The `.github/workflows/deploy.yml` file defines a GitHub Action that automates the deployment of our React application to a cPanel server. This workflow is triggered by any push to the `main` branch, ensuring that our production environment is always current with the latest changes. The deployment process consists of several key steps:

1. **Checkout Code**: The workflow begins by checking out the repository code using `actions/checkout@v3`, allowing subsequent steps to access the source files.

2. **Setup Node.js**: It sets up a Node.js environment using `actions/setup-node@v3`, specifying version 23.1, which is the latest version at the time of writing.

3. **Verify Secrets**: A script runs to verify that all necessary secrets (`FTP_SERVER`, `FTP_USERNAME`, and `FTP_PASSWORD`) are set. If any secrets are missing, the workflow exits with an error.

4. **Install Dependencies**: The workflow installs project dependencies using `npm ci`, which ensures a clean and consistent installation based on the `package-lock.json`.

5. **Build React App**: It builds the React application using `npm run build`, generating optimized production files in the `build` directory.

6. **Upload to cPanel**: Finally, it uses `SamKirkland/FTP-Deploy-Action@v4.3.4` to upload the built files to the specified directory (`/public_html/valuechain/`) on the cPanel server, utilizing FTP credentials stored in GitHub Secrets.

This automated deployment pipeline simplifies our release process by eliminating manual steps, ensuring that updates are promptly reflected in our production environment hosted on cPanel.

## Branch Protection and Workflow

Our repository employs strict branch protection rules to maintain code quality and enforce our development workflow. The `main` branch is protected, requiring pull requests with at least one approval before merging. Direct pushes to these branches are restricted, and all status checks (including CI/CD pipeline) must pass before merging. Additionally, all conversations must be resolved, and branches must be up-to-date before merging is allowed.

We follow a specific branch naming convention: `feature/<feature-name>` for new features, `bugfix/<issue-description>` for bug fixes, and `hotfix/<issue-description>` for critical fixes. Our development workflow involves creating new branches from `develop`, making changes, and opening pull requests to merge back into `develop`. Periodically, `develop` is merged into `main` for releases.

Code reviews are an integral part of our process. All pull requests require at least one approval from a team member, who should check for code quality, adherence to coding standards, and potential bugs. We use GitHub Actions for our CI/CD pipeline, which runs automated tests and builds on all pull requests. By adhering to these guidelines, we maintain a stable and collaborative development environment. For any questions, please contact the lead developer or repository administrator.
