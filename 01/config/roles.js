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

    "courseCategory:create",
    "courseCategoryRelation:create",
    "courseCategoryRelation:delete",
    "courseCategory:delete",
    "courseCategory:update",

    "courseComment:read",
    "courseComment:list:any",
    "courseComment:create",
    "courseComment:update:own",
    "courseComment:update:any",
    "courseComment:delete:own",
    "courseComment:delete:any",
    "courseComment:activate",

    "courseFavorite:create",
    "courseFavorite:read",
    "courseFavorite:delete",

    "courseRate:create",

    "courseSession:create",
    "courseSession:delete",

    "courseType:create",
    "courseType:delete",

    //news
    "news:favorite",
    "news:react",

    //news-comments
    "news:comment:update",
    "news:comment:delete",
    "news:comment:create",
    "news:comments:react",

    //tickets
    "tickets:read:own",
    "tickets:message:create",
    "tickets:message:read",
  ],
  student: [

    //course
    "course:read:any",
    "course:read:own",

    //user
    "user:read:own",
    "user:update:own",

    //tickets
    "tickets:read:own",
    "tickets:message:create",
    "tickets:message:read",

    "courseComment:read",
    "courseComment:create",
    "courseComment:update:own",
    "courseComment:delete:own",

    "courseFavorite:create",
    "courseFavorite:read",
    "courseFavorite:delete",

    "courseRate:create",

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

    "courseComment:read",
    "courseComment:create",
    "courseComment:update:own",
    "courseComment:delete:own",

    "courseFavorite:create",
    "courseFavorite:read",
    "courseFavorite:delete",

    "courseRate:create",

    "news:favorite",
    "news:react",

    //news-comments
    "news:comment:update",
    "news:comment:delete",
    "news:comment:create",
    "news:comments:react",
  ],
  support: [
    "tickets:create",
    "tickets:read:any",
    "tickets:update",
    "tickets:delete",
    "tickets:message:create",
    "tickets:message:read",
  ],
};

module.exports = {
  ROLE_PERMISSIONS,
};
