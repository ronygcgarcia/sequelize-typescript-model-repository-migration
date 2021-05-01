import { Op } from 'sequelize';

export const convertOpSymbolToText = (symbol: Symbol): string => {
  switch (symbol) {
    case Op.adjacent:
      return `[Op.adjacent]`;
    case Op.all:
      return `[Op.all]`;
    case Op.and:
      return `[Op.and]`;
    case Op.any:
      return `[Op.any]`;
    case Op.between:
      return `[Op.between]`;
    case Op.col:
      return `[Op.col]`;
    case Op.contained:
      return `[Op.contained]`;
    case Op.contains:
      return `[Op.contains]`;
    case Op.endsWith:
      return `[Op.endsWith]`;
    case Op.eq:
      return `[Op.eq]`;
    case Op.gt:
      return `[Op.gt]`;
    case Op.gte:
      return `[Op.gte]`;
    case Op.iLike:
      return `[Op.iLike]`;
    case Op.iRegexp:
      return `[Op.iRegexp]`;
    case Op.in:
      return `[Op.in]`;
    case Op.is:
      return `[Op.is]`;
    case Op.like:
      return `[Op.like]`;
    case Op.lt:
      return `[Op.lt]`;
    case Op.lte:
      return `[Op.lte]`;
    case Op.ne:
      return `[Op.ne]`;
    case Op.noExtendLeft:
      return `[Op.noExtendLeft]`;
    case Op.noExtendRight:
      return `[Op.noExtendRight]`;
    case Op.not:
      return `[Op.not]`;
    case Op.notBetween:
      return `[Op.notBetween]`;
    case Op.notILike:
      return `[Op.notILike]`;
    case Op.notIRegexp:
      return `[Op.notIRegexp]`;
    case Op.notIn:
      return `[Op.notIn]`;
    case Op.notLike:
      return `[Op.notLike]`;
    case Op.notRegexp:
      return `[Op.notRegexp]`;
    case Op.or:
      return `[Op.or]`;
    case Op.overlap:
      return `[Op.overlap]`;
    case Op.placeholder:
      return `[Op.placeholder]`;
    case Op.regexp:
      return `[Op.regexp]`;
    case Op.startsWith:
      return `[Op.startsWith]`;
    case Op.strictLeft:
      return `[Op.strictLeft]`;
    case Op.strictRight:
      return `[Op.strictRight]`;
    case Op.substring:
      return `[Op.substring]`;
    case Op.values:
      return `[Op.values]`;
  }
  return '';
};
