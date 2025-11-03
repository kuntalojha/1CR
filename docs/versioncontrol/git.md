---
outline: deep
---

# Git

- Git is a distributed version control system.

## Some Git Comments

- `git --version` - Show the version of Git.
- `git init` - Initialize a git repository.
- `git status` - Show the status of the working directory.
- `git add filename` - Add a file to the staging area.
- `git add .` - Add all files to the staging area.
- `git commit -m "message"` - Commit the changes to the repository.
- `git commit -am "message"` - *Add all files to the staging area and commit the changes to the repository.*
- `git log` - Show the commit history in detail and multiple lines.
- `git log --oneline` - Show the commit history in one line.
- `git reset <head id>` - It will reset the working directory to the specified commit. But it will not commit the changes. All changes will be available in the staging area.
- `git reset --hard HEAD` - Reset the working directory to the last commit.
- `git diff` - Show the changes between the working directory and the staging area.
- `git push -u origin main` - Push changes to a remote repository.
- `git branch -a` - List all branches in the current repository.
- `git branch -d <branch name>` - Delete a branch.
- `git branch  <branch name>` - Create a new branch.
- `git checkout <branch name>` - Switch to a branch.
- `git checkout -b <branch name>` - *Create a new branch and switch to it.*
- `git merge <branch name>` - Merge a branch into the current branch (main).
- `git merge --squash <branch name>` - *Merge a branch into the current branch (main) without creating a commit.*
- `git merge --abort` - Abort a merge.
- `git rebase <branch name>` - Rebase a branch onto another branch(main).
