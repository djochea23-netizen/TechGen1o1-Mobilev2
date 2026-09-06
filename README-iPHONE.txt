TECHGEN1O1 PWA FOR iPHONE — v1.2.0
==================================

This version installs from Safari using "Add to Home Screen". It does not need Xcode or a Mac.

IMPORTANT
---------
A PWA must be opened from an HTTPS website. Do not try to install it by opening index.html directly from the iPhone Files app.

IPHONE-ONLY SETUP USING GITHUB PAGES
------------------------------------
1. On your iPhone, open Safari and sign in to GitHub.com.
2. Create a new PUBLIC repository, for example: techgen1o1-mobile.
3. Open the repository and use Add file > Upload files.
4. In the iPhone Files app, unzip this package first, then upload ALL files from the TechGen1o1-PWA-iPhone-v1.2.0 folder to the repository root.
5. Commit the upload.
6. In the repository, open Settings > Pages.
7. Under Build and deployment, choose Deploy from a branch.
8. Choose branch: main and folder: /(root), then Save.
9. Wait a few minutes for GitHub Pages to publish the site.
10. Open the published HTTPS address in SAFARI.
11. Tap Share > Add to Home Screen > Add.
12. Launch TechGen1o1 from the new Home Screen icon.

DATA
----
- The app stores inventory/POS data locally on that iPhone.
- Existing PC data does not automatically sync to the iPhone.
- To move your current data, save an encrypted .tgbackup from the PC version and restore it on the iPhone version.
- Keep regular backups. Browser/PWA storage belongs to that device and can be lost if the app/site data is removed.

OFFLINE
-------
After the first successful HTTPS load, the app shell is cached and can open offline. Core inventory/POS data remains local to the iPhone.

UPDATES
-------
When you replace the files on the hosted site, reopen the app online so the service worker can cache the updated version.
