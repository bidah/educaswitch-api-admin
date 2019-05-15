'use strict';

/**
 * Attachment.js controller
 *
 * @description: A set of functions called "actions" for managing `Attachment`.
 */

module.exports = {

  /**
   * Retrieve attachment records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.attachment.search(ctx.query);
    } else {
      return strapi.services.attachment.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a attachment record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.attachment.fetch(ctx.params);
  },

  /**
   * Count attachment records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.attachment.count(ctx.query);
  },

  /**
   * Create a/an attachment record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.attachment.add(ctx.request.body);
  },

  /**
   * Update a/an attachment record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.attachment.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an attachment record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.attachment.remove(ctx.params);
  }
};
