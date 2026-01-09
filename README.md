# AUSCO Project

### TODOs

1. verify a or Link usage for internal/external navigation
2. clean data/content types (required fields cannot be null but add anyway for type safety)
3. make colours/colour variables consistent across website (including logos)
4. check text uses p, h1, etc. tags for seo
5. add secondary global font to repo
6. routing? (with dashes)
7. add type props to files in /actions
8. blur when image is rendering
9. global util file (stringToList, url checker for Media, etc.)
10. rename header to hero.tsx (so not to be confused with global header)
11. purge codebase of .env and login details
12. add notes to custom react component - some links have fallbacks (e.g. constitution/youtube video, etc.)

### BUGS

1. font (fraunces) not being applied globally
2. double check parallax effect on phone ui screen
3. min-h-screen doesn't account for footer height.

## Project Setup

### Installaion Requirements / Recommendations

- Git
- VS Code
- VS Code Extensions:

### Cloning the Project

1. Open Git Bash
2. Navigate to the location where you want the AUSCO project to be
3. Run: "git clone https://github.com/UoaWDCC/ausco"
4. Run: "cd ausco"
5. Run: "code ." (This automatically opens the repo in VS Code, if it's not working, you'll have to do it manually)

### Running the Project (Frontend)

1. Open the VS terminal
2. Navigate to the ausco folder
3. Run: "npm install"
4. Run: "npm run dev"
5. Go to your browser and enter: "http://localhost:3000"
6. Any saved changes you make in VS Code will be automatically reflected in localhost:3000

### Add .env file under ausco (root directory)

```
PAYLOAD_SECRET="a710400222333f83c1b1bd6abb7bd3116e3321f813c48efe8ba93bc75cd16b82"
DATABASE_URI="mongodb+srv://ausco:ausco!!!@ausco.ioi3ahr.mongodb.net/"
```

### Payload admin login

```
ausco@wdcc.co.nz
e1160e47
```

## Development

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

## Pulling New Changes

### If you've already cloned the repo but haven't made your feature branch

Run `git pull` on the main branch.

### If you've already cloned the repo and made your feature branch

```
git checkout main
git pull
git checkout your-feature-branch
git merge main
```

This will pull new changes made to the main branch into your feature branch.

## Accessing Media and Icons

### Media

- The folder src\app\(frontend)\assets for media you may need for your tickets.
- If the folder does not contain the media you need, send us a message on Discord and we'll look to get it sorted.

### Tailwind CSS

- We are using tailwind for styling

### ShadCn UI

- We are using shadcn ui for pre-built components
- Visit this site to find different components https://ui.shadcn.com/docs/components/accordion
- Follow the instructions to install the component

### Icons

- We are using Lucide icon library for our icons.
- Lucide is already installed into our repo so no additional installation is required.
- Visit the Lucide site to browse the different icons: https://lucide.dev/icons/
- Select/Search for the icon you want to use and follow the instructions on how to import it into your file.
- For example: If I wanted to use Facebook icon, run the following code at the top of your file:

```typescript
import { Facebook } from "lucide-react";
```

- And then you can use the Facebook icon as such:

```typescript
const App = () => {
  return (
    <Facebook />
  );
};
```

## Finishing Your Branch

### Creating a pull request

1. Go to GitHub's AUSCO page.
2. Select the "Pull requests" tab at the top left corner.
3. Select the "New pull request" button (in green on the right).
4. Select your branch.
5. Select the "Create pull request" button (in green on the right).
6. Fill in the description.
7. Select the "Create pull request" button (in green).
8. Await approval !
