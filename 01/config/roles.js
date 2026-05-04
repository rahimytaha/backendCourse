const ROLE_PERMISSIONS = {
  owner: ["*"],
  admin: ["*"],
  teacher: [
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
  ],
  student: [
    "course:read:any",
    "course:read:own",
    "user:read:own",
    "user:update:own",


    "courseComment:read",
    "courseComment:create",
    "courseComment:update:own",
    "courseComment:delete:own",


    "courseFavorite:create",
    "courseFavorite:read",
    "courseFavorite:delete",


    "courseRate:create",


  ],
  author: [
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


  ],
};

module.exports = {
  ROLE_PERMISSIONS,
};