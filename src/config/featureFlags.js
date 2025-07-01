const featureFlags = {
  enable2FA: process.env.ENABLE_2FA === 'true',
  enableMagicLink: process.env.ENABLE_MAGIC_LINK === 'true',
  enableAuditLogs: process.env.ENABLE_AUDIT_LOGS === 'true',
};

module.exports = featureFlags;
