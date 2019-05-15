'use strict';

/**
 * Term.js controller
 *
 * @description: A set of functions called "actions" for managing `Term`.
 */

module.exports = {

  /**
   * Retrieve term records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.term.search(ctx.query);
    } else {
      return strapi.services.term.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a term record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.term.fetch(ctx.params);
  },

  /**
   * Count term records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.term.count(ctx.query);
  },

  /**
   * Create a/an term record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.term.add(ctx.request.body);
  },

  /**
   * Update a/an term record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.term.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an term record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.term.remove(ctx.params);
  }
};
