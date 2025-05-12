# AUSCO Project

### Installaion Requirements / Recommendations:
- Git
- VS Code
- VS Code Extensions: 

### Cloning the Project:
1. Open Git Bash
2. Navigate to the location where you want the AUSCO project to be
3. Run: "git clone https://github.com/UoaWDCC/ausco"
4. Run: "cd ausco"
5. Run: "code ."

### Running the Project (Frontend)
1. Open the VS terminal
2. Navigate to the frontend folder: "cd src/app/(frontend)"
3. Run: "npm install"
4. Run: "npm run dev"
5. Go to your browser and enter: "http://localhost:3000"
6. Any saved changes you make in VS Code will be automatically reflected in localhost:3000

### How to Start Development
1. Create a new branch (copy the command in your assigned Jira ticket, under "Development - Create branch", and run this command in VS Code Terminal).
2. Each ticket also represents a component of the home page, so when you begin development, use your respective component, which can be found in the (frontend)/components folder.
3. Ensure you are committing and pushing your work as you develop!

### Pushing to the AUSCO Repo
1. Ensure you are on your feature branch (use "git checkout your-feature-branch-name" to switch to your feature branch)
2. Run: "git add ." (This will add all files with changes to the staging area)
3. Run: "git commit -m "(header): (message)"" (See below section for header/message guidelines)
4. Run: "git push" (If this is your first time pushing a newly created branch, you may need to copy and paste the recommended command shown by Git)

### Git Commit Guidelines
- Git commit command: "git commit -m "(header): (message)""
- Common git header examples:
  - feat – a new feature
  - fix – a bug fix
  - docs – documentation changes
  - style – formatting, missing semicolons, etc. (no code changes)
  - refactor – code change that neither fixes a bug nor adds a feature
  - perf – performance improvement
  - revert – reverts a previous commit
- Keep git messages concise and specific to one type of change. One sentence to summarise the changes made is sufficient. If you need to use more than one sentence, chances are, you need to commit more often.
- Some examples:
  - feat: add user login functionality
  - fix: correct password validation bug
  - docs: update README with installation steps
  - style: format code with Prettier
  - refactor: simplify authentication logic



