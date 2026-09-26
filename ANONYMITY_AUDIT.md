# AgentHoneypot Anonymous Release Audit

Audit date: 2026-09-26

## Status

```text
ANONYMITY_STATUS = FAIL
CURRENT_HEAD = 0aca6407688222a1cf37b7948c253f83b8e8d788
PUBLIC_REPOSITORY = https://github.com/AgentHoneypot/AgentHoneypot.github.io
PUBLIC_SITE = https://AgentHoneypot.github.io/
CURRENT_TREE_IDENTITY_SCAN = PASS
GIT_HISTORY_IDENTITY_SCAN = PASS for all reachable refs
COMMIT_AUTHOR_SCAN = PASS for all reachable refs; AgentHoneypot only
PUBLIC_PAGE_SCAN = PASS
STATIC_ASSET_METADATA_SCAN = PASS for available local binary/text scans; exiftool unavailable
TRACKING_ANALYTICS_SCAN = PASS
PERSONAL_REPOSITORY_REFERENCE_SCAN = FAIL
SECRET_SCAN = PASS
```

## Repository state

- The inspected worktree is the standalone website repository.
- Branch: `main`.
- The website content release ref is `main` at `0aca6407688222a1cf37b7948c253f83b8e8d788`; later metadata-only commits preserve the same site tree.
- There are no tags and no other branches in the local clone or remote repository.
- The only configured remote is `agenthoneypot`, pointing to `AgentHoneypot/AgentHoneypot.github.io`.
- The repository is public and Pages is configured for the GitHub Actions workflow.

## Identity and history findings

The current tracked tree contains no author names, personal account handles, personal emails, personal GitHub URLs, affiliations, profile identifiers, local absolute paths, or private source URLs. The HTML, CSS, JavaScript, workflow, README, SVG files, and config are clean.

All commits reachable from public refs were enumerated with `git rev-list --all`. Every reachable release commit is authored and committed by the neutral release account:

```text
AgentHoneypot <AgentHoneypot@users.noreply.github.com>
```

No historical blobs containing the searched personal identity strings are reachable from a public ref. The local reflog and unreachable objects were pruned after the history rewrite.

## Published-site findings

The root site returned HTTP 200 and served the project page after the latest Pages Actions deployment. The published HTML was scanned for personal names, emails, profile URLs, private repository references, citation author metadata, tracking scripts, analytics, telemetry, and visitor-identification services. None were found. `site/js/config.js` keeps `authors: []`, `affiliation: null`, `paperUrl: null`, `repositoryUrl: null`, and `bibtex: null`.

No `robots.txt`, sitemap, manifest, source map, or tracking script is shipped. The workflow contains only the official GitHub Pages actions and standard Pages permissions.

## Asset and metadata findings

- SVG files contain only project icon definitions and no editor, author, creator, or XMP metadata markers.
- WebP files were checked for readable identity strings and no personal or local-path metadata was found.
- `exiftool` is not installed in the audit environment, so this result is limited to available binary/string and structural checks.

## Issues and required manual actions

1. **Public duplicate repository risk (FAIL):** A public duplicate of this website remains under a personal account outside the anonymous release repository. It was not modified because this audit is limited to the current release repository. The duplicate should be made private or deleted by its owner before review if complete public anonymity is required.
2. **Old commit object risk (FAIL):** The hosting platform still serves a pre-anonymization commit object when addressed directly by its old SHA. It is no longer reachable from `main`, any branch, tag, or Actions history. The platform does not provide an individual commit-object deletion API. Full removal would require deleting and recreating the public repository, which was not performed automatically because it is destructive.

These two external/platform-level issues are why `ANONYMITY_STATUS` is `FAIL` even though the anonymous repository tree, reachable history, and rendered site are clean.

## Fixes made during this audit

- Removed the personal-account remote from the local clone.
- Rewrote `main` as a single anonymous root commit authored by `AgentHoneypot`.
- Removed old personal Actions run records from the public repository.
- Set Pages back to the official GitHub Actions publishing source.
- Confirmed the site has no analytics, telemetry, counters, or external visitor-identification code.

No experiment code, frozen scientific artifact, or external repository was modified.
