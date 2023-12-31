# Open Action / Smart Post PR Template

To submit a new Smart Post, [create a new PR](https://github.com/lens-protocol/open-actions-directory/compare) with the following information in the PR comment:

- Open Action name
- Open Action description
- Link to Open Action (Codebase and live example if available)
- Detailed instructions of how to integrate Open Action (this should also be included in your README or other documentation).
- Block explorer link
- Apps - List of apps where the action is integrated (if any)
- Any special security and execution considerations

#### Configuration of metadata
To add the smart post to the repo, fork the codebase and add the following JSON to [`actions.json`](https://github.com/lens-protocol/open-actions-directory/blob/main/actions.json) file in the root directory:

```
{
  "type": "action",
  "name": "<action-name>",
  "description": "<action-description>",
  "link": "<link-to-codebase>",
  "builder": "<link-to-your-personal-social-profile-of-choice>",
  "apps": [],
  "block_explorer_link": "<block-explorer-link>",
  "special_security_and_execution_considerations": "<documentation-of-special-security-and-execution-considerations>"
}
```
