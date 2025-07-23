# Contributing to AI Radio Controller

Thank you for your interest in contributing to AI Radio Controller! We welcome contributions from the community and are pleased to have you join us.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [maintainer-email@example.com].

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- Git
- AzuraCast instance for testing (optional but recommended)
- OpenAI API key for testing AI features

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/ai-radio-controller.git
   cd ai-radio-controller
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/ai-radio-controller.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your test API keys
   ```

5. **Link for local development**
   ```bash
   npm link
   ```

6. **Verify installation**
   ```bash
   radio --help
   ```

## 🤝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected behavior**
- **Actual behavior**
- **Environment details** (OS, Node.js version, etc.)
- **Error messages** or logs
- **Screenshots** if applicable

Use the bug report template:

```markdown
**Bug Description**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Run command '...'
2. See error

**Expected Behavior**
What you expected to happen.

**Environment**
- OS: [e.g. Windows 11, macOS 12.0, Ubuntu 20.04]
- Node.js version: [e.g. 18.0.0]
- Package version: [e.g. 1.0.0]

**Additional Context**
Any other context about the problem.
```

### Suggesting Features

Feature requests are welcome! Please provide:

- **Clear title and description**
- **Use case** - why would this feature be useful?
- **Proposed solution** - how should it work?
- **Alternatives considered**
- **Additional context**

### Contributing Code

1. **Check existing issues** - look for issues labeled `good first issue` or `help wanted`
2. **Create an issue** - if one doesn't exist for your contribution
3. **Fork and create a branch** - use a descriptive name
4. **Make your changes** - follow our coding standards
5. **Test your changes** - ensure everything works
6. **Submit a pull request** - follow our PR template

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows our style guidelines
- [ ] Self-review of your code
- [ ] Comments added for hard-to-understand areas
- [ ] Documentation updated if needed
- [ ] No new warnings or errors
- [ ] Tested on multiple platforms if possible

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All tests pass

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented hard-to-understand areas
- [ ] Updated documentation
- [ ] No new warnings

## Screenshots (if applicable)
```

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** on different environments
4. **Approval** from at least one maintainer
5. **Merge** by maintainer

## 📝 Coding Standards

### JavaScript Style

- Use **ES6+** features where appropriate
- **2 spaces** for indentation
- **Semicolons** required
- **Single quotes** for strings
- **camelCase** for variables and functions
- **PascalCase** for classes
- **UPPER_SNAKE_CASE** for constants

### File Structure

```javascript
// File header comment
const dependencies = require('...');

// Constants
const CONSTANT_VALUE = 'value';

// Main class/function
class ExampleClass {
    constructor() {
        // Constructor logic
    }

    /**
     * Method description
     * @param {string} param - Parameter description
     * @returns {Promise<Object>} Return description
     */
    async exampleMethod(param) {
        // Method logic
    }
}

module.exports = ExampleClass;
```

### Error Handling

- Always use try/catch for async operations
- Provide meaningful error messages
- Log errors appropriately
- Don't expose sensitive information in errors

```javascript
try {
    const result = await apiCall();
    return result;
} catch (error) {
    logger.error('Failed to call API', { error: error.message });
    throw new Error('API call failed. Please check your configuration.');
}
```

### Documentation

- Use JSDoc for function documentation
- Include parameter types and descriptions
- Document return values
- Add examples for complex functions

```javascript
/**
 * Generate playlist suggestions for a station
 * @param {number} stationId - The station ID
 * @param {number} count - Number of songs to generate
 * @returns {Promise<Object>} Playlist suggestions with station info
 * @example
 * const suggestions = await generatePlaylist(5, 10);
 */
async function generatePlaylist(stationId, count) {
    // Implementation
}
```

## 🧪 Testing

### Manual Testing

Test your changes with:

```bash
# Test basic functionality
radio --help
radio manage stations

# Test with real data (if available)
radio generate playlist -s 1 -c 5
radio schedule analyze -s 1
```

### Test Checklist

- [ ] All commands work as expected
- [ ] Error handling works properly
- [ ] Help text is accurate
- [ ] No breaking changes to existing functionality
- [ ] Works on different operating systems

## 📚 Documentation

### When to Update Documentation

- Adding new features
- Changing existing functionality
- Fixing bugs that affect usage
- Adding new configuration options

### Documentation Types

- **README.md** - Main project documentation
- **DEVELOPMENT.md** - Developer documentation
- **Code comments** - Inline documentation
- **JSDoc** - Function documentation

## 🌟 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **CHANGELOG.md** for significant contributions
- **GitHub releases** notes

## 💬 Community

### Getting Help

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Email** - [maintainer-email@example.com] for private matters

### Communication Guidelines

- Be respectful and constructive
- Stay on topic
- Help others when possible
- Follow the code of conduct

## 🎯 Good First Issues

Looking for a place to start? Check out issues labeled:

- `good first issue` - Perfect for newcomers
- `help wanted` - We need community help
- `documentation` - Improve our docs
- `bug` - Fix existing issues

## 📋 Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

Examples:
```
feat(playlist): add AI-powered song recommendations
fix(schedule): handle empty listener data gracefully
docs(readme): update installation instructions
```

## 🚀 Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create release PR
4. Tag release after merge
5. Publish to npm

---

Thank you for contributing to AI Radio Controller! 🎵
