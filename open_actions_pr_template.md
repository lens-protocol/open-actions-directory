# Open Action PR Template

To submit a new Open Action, create a new PR with the following information in the PR comment:

- Open Action name
- Open Action description
- Link to Open Action (Codebase and live example if available)
- Detailed instructions of how to integrate Open Action (this should also be included in your README or other documentation).

#### Open Action JSON
To add the option action to the repo, fork the codebase and add the following JSON to `actions.json` file in the root directory:

```
{
  type: "action",
  name: "<action-name>",
  description: "<action-description>",
  link: "<link-to-codebase>",
  builder: "<link-to-your-personal-social-profile-of-choice>"
}
```
