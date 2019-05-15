'use strict';

/**
 * Stage.js controller
 *
 * @description: A set of functions called "actions" for managing `Stage`.
 */

module.exports = {

  /**
   * Retrieve stage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.stage.search(ctx.query);
    } else {
      return strapi.services.stage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a stage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.stage.fetch(ctx.params);
  },

  /**
   * Count stage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.stage.count(ctx.query);
  },

  /**
   * Create a/an stage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.stage.add(ctx.request.body);
  },

  /**
   * Update a/an stage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.stage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an stage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.stage.remove(ctx.params);
  }
};
