#!/bin/bash

# Prompt the user for the commit message
echo "Enter the commit message:"
read commit_message

# Add all changes to the staging area
git add .

# Commit the changes with the specified message
git commit -m "$commit_message"