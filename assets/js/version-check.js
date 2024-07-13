// Get the current version from the meta tag
const currentVersion = document.querySelector('meta[name="version"]').getAttribute('content');

// Check if the version stored in localStorage matches the current version
const storedVersion = localStorage.getItem('siteVersion');

if (storedVersion !== currentVersion) {
    // If the versions don't match, clear the cache and store the new version
    localStorage.setItem('siteVersion', currentVersion);
    clearCache();
}

function clearCache() {
    // List of assets to be cleared from the cache
    const assets = [
        '/assets/css/main.css',
        '/assets/js/main.js',
        // Add any other assets here
    ];

    // Append version query string to each asset to force cache busting
    assets.forEach((asset) => {
        const element = document.querySelector(`[href="${asset}"], [src="${asset}"]`);
        if (element) {
            const newAsset = `${asset}?v=${currentVersion}`;
            if (element.tagName === 'LINK') {
                element.href = newAsset;
            } else if (element.tagName === 'SCRIPT') {
                element.src = newAsset;
            }
        }
    });

    // Reload the page to apply the changes
    window.location.reload(true);
}