# Security Policy

## Supported Versions

We actively support the following versions of AI AzuraCast Controller with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The AI AzuraCast Controller team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to:

**📧 [security@highlimitdesigns.com](mailto:security@highlimitdesigns.com)**

Include the following information in your report:

- **Type of issue** (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths of source file(s)** related to the manifestation of the issue
- **The location of the affected source code** (tag/branch/commit or direct URL)
- **Any special configuration** required to reproduce the issue
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue**, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

### What to Expect

After submitting a report, you can expect:

1. **Acknowledgment** within 48 hours
2. **Initial assessment** within 5 business days
3. **Regular updates** on our progress
4. **Credit** in our security advisories (if desired)

### Response Timeline

- **Critical vulnerabilities**: Patched within 7 days
- **High severity**: Patched within 14 days
- **Medium/Low severity**: Patched in next regular release

## Security Considerations

### API Keys and Credentials

- **Never commit API keys** to version control
- **Use environment variables** for all sensitive configuration
- **Rotate API keys regularly**
- **Use least-privilege access** for AzuraCast API keys

### Data Handling

- **Listener data** is processed locally and not stored permanently
- **API responses** are logged only in debug mode
- **Sensitive information** is filtered from logs

### Network Security

- **HTTPS only** for all API communications
- **Certificate validation** is enforced
- **No data transmission** to third parties except OpenAI API

### Dependencies

We regularly update dependencies to address known vulnerabilities:

- **Automated dependency scanning** via GitHub Dependabot
- **Regular security audits** of npm packages
- **Prompt updates** for critical security patches

## Security Best Practices for Users

### Installation Security

```bash
# Verify package integrity
npm audit ai-azuracast-controller

# Install from official registry only
npm install -g ai-azuracast-controller
```

### Configuration Security

```bash
# Set restrictive permissions on .env file
chmod 600 .env

# Use strong, unique API keys
# Rotate keys regularly
```

### Runtime Security

- **Run with minimal privileges** - don't use root/administrator
- **Monitor logs** for unusual activity
- **Keep software updated** to latest version
- **Use firewall rules** to restrict network access if needed

## Vulnerability Disclosure Policy

We follow responsible disclosure practices:

1. **Private reporting** to our security team
2. **Coordinated disclosure** timeline
3. **Public advisory** after patch is available
4. **Credit** to security researchers (with permission)

## Security Updates

Security updates are distributed through:

- **NPM package updates** (primary method)
- **GitHub Security Advisories**
- **Release notes** with security section
- **Email notifications** for critical issues (if subscribed)

## Scope

This security policy applies to:

- **AI AzuraCast Controller** core application
- **Official documentation** and examples
- **Distribution packages** (NPM, GitHub releases)

This policy does not cover:

- **Third-party integrations** (AzuraCast, OpenAI)
- **User configurations** and custom modifications
- **Infrastructure** hosting the repositories

## Security Contact

For security-related questions or concerns:

- **Email**: [security@highlimitdesigns.com](mailto:security@highlimitdesigns.com)
- **PGP Key**: Available upon request
- **Response Time**: Within 48 hours

## Hall of Fame

We recognize security researchers who help improve our security:

*No security issues have been reported yet.*

---

**Thank you for helping keep AI AzuraCast Controller and our users safe!**
