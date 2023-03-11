import { css, ThemedStyledProps } from "styled-components";
import { fontSizeTypes } from "../config/font";
import { fontSizing } from "../function/style/fontSizing";
import { mq } from "../function/style/mq";
import { isMediaQuery } from "../types/guards/isMediaQuery";
import { isString } from "../types/guards/isPrimary";
import { isStringArray } from "../types/guards/isStringArray";
import { isStringMatrix } from "../types/guards/isStringMatrix";
import { MediaQueryType } from "../types/mediaQuery";
import {
  ConfigurableAnimationProperty,
  configurableAnimationProperties,
  ConfigurableCssProperty,
  configurableCssPropertyDefaultValues,
  MediaQueryableProperties,
  INITIAL_VAlUE,
} from "../types/property";
import { valueof } from "../types/utilities";

/**
 * Styledコンポーネントのprops用の型
 */
export interface StPropsConfiguration {
  fontSizeType?: fontSizeTypes;
  st?: MediaQueryableProperties;

  animation?: {
    [animationTrigger: ConfigurableAnimationProperty]: MediaQueryableProperties;
  };
}

/**
 * CSSプロパティ名に値をマッピングして返す
 * @param property ConfigurableCssProperty: マッピングしたいプロパティ名
 * @param propertyValue valueof<MediaQueryableProperties>: 対応する値
 * @returns property: propertyValueのようにCSS形式でマッピングした文字列
 */
const propertyValueMapper = (
  property: ConfigurableCssProperty,
  propertyValue?: valueof<MediaQueryableProperties>
) => {
  // stでプロパティの値がセットされていない場合
  if (typeof propertyValue === "undefined") {
    // defaultValueがINITIAL_VALUEだったらCSSを設定しない
    if (
      configurableCssPropertyDefaultValues[property].defaultValue ===
      INITIAL_VAlUE
    ) {
      return "";
    }

    // 適切なdefaultValueが設定されている場合は，それをマッピングする
    return css`
      ${configurableCssPropertyDefaultValues[property]
        .css}: ${configurableCssPropertyDefaultValues[property].defaultValue};
    `;
  }

  // propertyValueの方に応じてマッピングの方法を変える
  if (isString(propertyValue)) {
    return `
      ${configurableCssPropertyDefaultValues[property].css}: ${propertyValue};
    `;
  }
  if (isStringArray(propertyValue)) {
    return `
      ${
        configurableCssPropertyDefaultValues[property].css
      }: ${propertyValue.join(" ")};
    `;
  }
  if (isStringMatrix(propertyValue)) {
    return `
      ${configurableCssPropertyDefaultValues[property].css}: ${propertyValue
      .map((array) => `"${array.join(" ")}"`)
      .join(" ")};
    `;
  }
};

/**
 *
 * @param property
 * @param propertyValue
 * @returns
 */
const propertyAnimationMapper = (
  property: ConfigurableCssProperty,
  propertyValue?: valueof<MediaQueryableProperties>
) => {
  if (typeof propertyValue === "undefined") {
    return css``;
  }

  if (isString(propertyValue)) {
    return `
      ${configurableCssPropertyDefaultValues[property].css}: ${propertyValue};
    `;
  }
  if (isStringArray(propertyValue)) {
    return `
      ${
        configurableCssPropertyDefaultValues[property].css
      }: ${propertyValue.join(" ")};
    `;
  }
  if (isStringMatrix(propertyValue)) {
    return `
      ${configurableCssPropertyDefaultValues[property].css}: ${propertyValue
      .map((array) => `"${array.join(" ")}"`)
      .join(" ")};
    `;
  }
};

/**
 * propertyValueMapperを用いてpropertyとpropsから取り出したpropertyValueをマッピングする
 * @param props Stコンポーネントが受け取るprops
 * @param property ConfigurableCssProperty マッピングさせたいプロパティ
 * @returns propertyValueMapperの結果
 */
const extendsStylingProperty = (
  props: ThemedStyledProps<StPropsConfiguration, any>,
  property: ConfigurableCssProperty
) => {
  if (!props.st) {
    // defaultValueがINITIAL_VALUEだったらCSSを設定しない
    if (
      configurableCssPropertyDefaultValues[property].defaultValue ===
      INITIAL_VAlUE
    ) {
      return "";
    }
    return `${configurableCssPropertyDefaultValues[property].css}: ${configurableCssPropertyDefaultValues[property].defaultValue};`;
  }

  const propertyValue = props.st[property];

  if (isMediaQuery(propertyValue)) {
    const keys = Object.keys(propertyValue) as MediaQueryType[];
    return css`
      ${keys.map((key) => {
        return mq[key]`
          ${propertyValueMapper(property, propertyValue[key])};
        `;
      })}
    `;
  }

  return css`
    ${propertyValueMapper(property, propertyValue)}
  `;
};

const extendsAnimationProperty = (
  props: ThemedStyledProps<StPropsConfiguration, any>,
  animationTrigger: ConfigurableAnimationProperty,
  property: ConfigurableCssProperty
) => {
  if (!props.animation) {
    return "";
  }
  const animationProperties = props.animation[animationTrigger];
  if (!animationProperties) {
    return "";
  }

  const propertyValue = animationProperties[property];

  if (isMediaQuery(propertyValue)) {
    const keys = Object.keys(propertyValue) as MediaQueryType[];
    return css`
      ${keys.map((key) => {
        return mq[key]`
          ${propertyValueMapper(property, propertyValue[key])};
        `;
      })}
    `;
  }

  return css`
    ${propertyAnimationMapper(property, propertyValue)}
  `;
};

/**
 * デフォルトのスタイリングを展開する
 * @returns 
 */
export const extendsDefaultStyling = () => {
  return css<StPropsConfiguration>`
    ${(props) => {
      return css`
        ${(
          Object.keys(
            configurableCssPropertyDefaultValues
          ) as ConfigurableCssProperty[]
        ).map((key) => {
          return extendsStylingProperty(props, key);
        })}
      `;
    }}

    ${(props) => {
      return css`
        ${configurableAnimationProperties.map(
          (configurableAnimationProperty) => {
            return css`
          :${configurableAnimationProperty} {
            ${(
              Object.keys(
                configurableCssPropertyDefaultValues
              ) as ConfigurableCssProperty[]
            ).map((key) => {
              return extendsAnimationProperty(
                props,
                configurableAnimationProperty,
                key
              );
            })}
          }
        `;
          }
        )}
      `;
    }}

    ${(props) => {
      if (props.fontSizeType) {
        return css`
          ${fontSizing(props.fontSizeType)}
        `;
      }
    }}
  `;
};
