# NPM Publishing Guide for AI Radio Controller

This guide will walk you through the process of publishing the AI Radio Controller package to the NPM registry.

## 📋 Pre-Publishing Checklist

### 1. Update Package Information

Before publishing, update the following fields in `package.json`:

```json
{
  "author": {
    "name": "Your Actual Name",
    "email": "your-actual-email@example.com",
    "url": "https://github.com/your-actual-username"
  },
  "homepage": "https://github.com/your-actual-username/ai-radio-controller#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-actual-username/ai-radio-controller.git"
  },
  "bugs": {
    "url": "https://github.com/your-actual-username/ai-radio-controller/issues"
  },
  "funding": {
    "type": "github",
    "url": "https://github.com/sponsors/your-actual-username"
  }
}
```

### 2. Verify Package Name Availability

Check if the package name is available on NPM:

```bash
npm view ai-radio-controller
```

If the package exists, you'll need to choose a different name. Consider:
- `@your-username/ai-radio-controller` (scoped package)
- `ai-radio-station-controller`
- `azuracast-ai-controller`

### 3. Test the Package Locally

```bash
# Install dependencies
npm install

# Link the package globally for testing
npm link

# Test all commands
radio --help
radio manage stations
radio generate playlist --help
radio schedule analyze --help

# Unlink when done testing
npm unlink
```

### 4. Verify Files to be Published

Check what files will be included in the package:

```bash
npm pack --dry-run
```

This should include:
- `src/` directory
- `README.md`
- `LICENSE`
- `CHANGELOG.md`
- `.env.example`
- `package.json`

## 🚀 Publishing Steps

### Step 1: Create NPM Account

If you don't have an NPM account:

1. Go to [npmjs.com](https://www.npmjs.com/)
2. Sign up for a new account
3. Verify your email address

### Step 2: Login to NPM

```bash
npm login
```

Enter your NPM credentials when prompted.

### Step 3: Verify Login

```bash
npm whoami
```

This should display your NPM username.

### Step 4: Final Package Validation

```bash
# Check for any issues
npm audit

# Validate package.json
npm pkg fix

# Run prepublish checks
npm run prepublishOnly
```

### Step 5: Publish to NPM

For the first publication:

```bash
npm publish
```

For scoped packages (if using @username/package-name):

```bash
npm publish --access public
```

### Step 6: Verify Publication

Check that your package is available:

```bash
npm view ai-radio-controller
```

Visit your package page: `https://www.npmjs.com/package/ai-radio-controller`

## 📦 Post-Publishing Steps

### 1. Test Installation

Test installing your package globally:

```bash
npm install -g ai-radio-controller
radio --help
```

### 2. Update GitHub Repository

1. Push all changes to GitHub
2. Create a release tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. Create a GitHub release with release notes

### 3. Update Documentation

Ensure all URLs in README.md point to the correct GitHub repository.

## 🔄 Publishing Updates

### Version Management

Follow semantic versioning:

- **Patch** (1.0.1): Bug fixes
- **Minor** (1.1.0): New features (backward compatible)
- **Major** (2.0.0): Breaking changes

### Update Process

1. Make your changes
2. Update version in `package.json`:
   ```bash
   npm version patch  # or minor, major
   ```
3. Update `CHANGELOG.md`
4. Commit changes:
   ```bash
   git add .
   git commit -m "Release v1.0.1"
   ```
5. Publish:
   ```bash
   npm publish
   ```
6. Push to GitHub:
   ```bash
   git push origin main --tags
   ```

## 🛡️ Security Considerations

### 1. Environment Variables

- Never commit `.env` files
- Ensure `.env.example` doesn't contain real credentials
- Document all required environment variables

### 2. Dependencies

- Regularly audit dependencies: `npm audit`
- Keep dependencies updated
- Use exact versions for critical dependencies

### 3. Access Control

- Use 2FA on your NPM account
- Consider using NPM teams for organization packages
- Regularly review package access

## 📊 Package Analytics

### NPM Statistics

Monitor your package usage:
- Visit: `https://www.npmjs.com/package/ai-radio-controller`
- Check download statistics
- Monitor issues and feedback

### GitHub Analytics

- Monitor GitHub stars and forks
- Review issues and pull requests
- Track community engagement

## 🐛 Troubleshooting

### Common Publishing Issues

**Error: Package name already exists**
```bash
# Solution: Use a scoped package or different name
npm publish --access public
```

**Error: You do not have permission to publish**
```bash
# Solution: Check if you're logged in
npm whoami
npm login
```

**Error: Version already exists**
```bash
# Solution: Update version number
npm version patch
npm publish
```

### Package Not Working After Installation

1. Check if binary is executable:
   ```bash
   chmod +x src/index.js
   ```

2. Verify shebang line in `src/index.js`:
   ```javascript
   #!/usr/bin/env node
   ```

3. Test local installation:
   ```bash
   npm pack
   npm install -g ./ai-radio-controller-1.0.0.tgz
   ```

## 📈 Growing Your Package

### 1. Documentation

- Keep README.md updated
- Add examples and tutorials
- Create video demonstrations

### 2. Community

- Respond to issues promptly
- Welcome contributions
- Create discussion forums

### 3. Features

- Listen to user feedback
- Add requested features
- Maintain backward compatibility

### 4. Promotion

- Share on social media
- Write blog posts
- Present at conferences
- Submit to awesome lists

## 🎯 Success Metrics

Track these metrics to measure success:

- **Downloads**: Weekly/monthly download counts
- **GitHub Stars**: Community interest indicator
- **Issues/PRs**: Community engagement
- **Feedback**: User satisfaction and feature requests

## 📞 Support

If you encounter issues during publishing:

1. Check NPM documentation: [docs.npmjs.com](https://docs.npmjs.com/)
2. NPM support: [npmjs.com/support](https://www.npmjs.com/support)
3. GitHub issues: Create an issue in your repository

---

**Good luck with your open source project! 🚀**
