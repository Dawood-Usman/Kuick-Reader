# Summers-Project Collaboration Guide

Welcome to the summers project repository! This guide will help you understand the collaboration workflow and best practices for working on this project.

## Git Configuration

1. Initialize your working directory as .git
```
git init
```
2. Configure your git username & email
```
git config --global user.name "your user-name"
git config --global user.email "your email"
```
3. Set up the Remote Repository
```
git remote add origin https://github.com/Dawood-Usman/Kuick-Reader
```
4. Pull or Clone code from the master branch
```
git pull origin master OR git clone https://github.com/Dawood-Usman/Kuick-Reader
```
## Collaboration Workflow

5. create a new branch for your work
```
git checkout -b <new-branch-name>
```
<br> 
Note:
Before making any changes, create a new branch for your work. Use a descriptive branch name that reflects the task or feature you're working on (See branch name guide section).
Work on Your Changes Make the necessary changes and additions to the project on your local machine. Once you're satisfied with your changes, 
commit them to your local branch using the following command:
<br><br>

```
git add .
git commit -m "your commit msg"
```
6. Push your local branch to the remote repository
```
git push -u origin <your-branch-name>

```
7.  Keep your Repository up to date to avoid conflicts
```
git pull origin master
```

## Create a pull request
- Go to the GitHub repository page and navigate to the "Pull Requests" tab.
- Click on the "New Pull Request" button and select your branch.
- Provide a descriptive title and a detailed description of your changes.
- Once ready, submit the pull request.

## Review and Merge
Other collaborators will review your pull request, provide feedback, and suggest changes if necessary. 
Once your changes have been reviewed and approved, they will be merged into the master branch.

## Branch Name Guide
- Feature Branches: `feature/nav-Bar`
- Bug Fix Branches: `bugfix/login-issue`
- Refactoring Branches: `improve/error-handling`
- Release Branches: `release/1.0.0`
