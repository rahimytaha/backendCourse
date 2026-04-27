const ROLE_PERMISSIONS = {
  owner: ["*"],
  admin: ["*"],
  teacher: [
    //user
    "user:read:own",
    "user:update:own",
    //course
    "course:read:any",
    "course:read:own",
    "course:create",
    "course:update:own",
    //news
    "news:favorite",
    "news:react",
    //news-comments
    "news:comment:update",
    "news:comment:delete",
    "news:comment:create",
    "news:comments:react",
  ],
  student: [
    //course
    "course:read:any",
    "course:read:own",
    //user
    "user:read:own",
    "user:update:own",
    //news
    "news:favorite",
    "news:react",
    //news-comments
    "news:comment:update",
    "news:comment:delete",
    "news:comment:create",
    "news:comments:react",
  ],
  author: [
    //user
    "user:read:own",
    "user:update:own",
    //news
    "news:update",
    "news:delete",
    "news:create",
    "news:favorite",
    "news:react",
    //news-comments
    "news:comment:update",
    "news:comment:delete",
    "news:comment:create",
    "news:comments:react",
  ],
};

module.exports = {
  ROLE_PERMISSIONS,
};
