# Multi-Contributor Git Workflow Simulation Report

**Student / Contributor:** Tiro Careza
**Repository:** https://github.com/tirocareza7-del/git-boxoffice-sync-tiro-careza

---

## Task Summary & Workflow Execution

### Task 1: Initial Feature Branch Development (Clone A)
- Created and checked out `feature/group-pricing` branch.
- Implemented a 10% group discount for orders of 5 or more tickets in `tickets.js`.
- Verified logic using `node test.js`.
- Committed and pushed changes to `origin/feature/group-pricing`.
- **Screenshot:** `screenshots/task1.png`

### Task 2: Parallel Feature Modification & Rejected Push (Clone B)
- Cloned repository into isolated directory `clone-b`.
- Checked out `feature/group-pricing` and modified `tickets.js` with a divergent 15% discount tier for 10+ tickets.
- Attempted to push directly to remote; push was rejected due to non-fast-forward divergence.
- **Screenshot:** `screenshots/task2.png`

### Task 3: 2-Way Conflict Resolution & Sync (Clone B)
- Executed `git pull origin feature/group-pricing` to pull remote changes into Clone B.
- Resolved content conflict in `tickets.js` by combining discount rules: 15% discount for 10+ tickets and 10% discount for 5-9 tickets.
- Verified passing tests with `node test.js`, committed conflict resolution, and pushed to `origin/feature/group-pricing`.
- **Screenshot:** `screenshots/task3.png`

### Task 4: Parallel Contributor C Development (Clone C)
- Cloned repository into isolated directory `clone-c` and checked out `feature/vip-surcharge`.
- Implemented flat $10 VIP surcharge parameter in `tickets.js`.
- Committed and pushed branch `feature/vip-surcharge` to remote repository.
- **Screenshot:** `screenshots/task4.png`

### Task 5: 3-Way Merge Resolution (Clone C)
- Executed `git fetch origin` and `git merge origin/feature/group-pricing` inside Clone C.
- Resolved 3-way merge conflict in `tickets.js` by unifying group discount tiers and VIP surcharge logic.
- Executed `node test.js` to ensure all assertion tests pass.
- Committed resolution and pushed updated `feature/vip-surcharge` branch to remote.
- **Screenshot:** `screenshots/task5.png`

### Task 6: Rebase Reconciliation (Clone A)
- Switched back to primary repository (Clone A) and fetched remote changes.
- Checked out `feature/vip-surcharge` and rebased onto `main` using `git rebase main`.
- Resolved rebase content conflict in `tickets.js`, staged changes with `git add tickets.js`, and continued rebase.
- Verified logic with `node test.js`.
- **Screenshot:** `screenshots/task6.png`

### Task 7: Main Release Integration & Tagging (Clone A)
- Checked out `main` branch and merged `feature/vip-surcharge`.
- Created release tag `v1.0-synced`.
- Pushed updated `main` branch and release tags (`git push origin main`, `git push origin --tags`).
- **Screenshot:** `screenshots/task7.png`