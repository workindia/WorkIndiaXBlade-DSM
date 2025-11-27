---
'@workindia/dsm': patch
---

Lock Blade version and add automated release monitoring

- Lock @razorpay/blade version to exact version (12.65.1) in package.json to prevent automatic updates
- Add GitHub Actions workflow to monitor and notify about new Blade and Blade MCP releases
- Automatically create GitHub issues with changelog when new versions are detected
- Add version tracking file to prevent duplicate issue creation
