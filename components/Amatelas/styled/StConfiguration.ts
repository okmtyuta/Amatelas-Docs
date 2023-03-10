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
} from "../types/property";
import { valueof } from "../types/utilities";

export interface StPropsConfiguration {
  fontSizeType?: fontSizeTypes;
  st?: MediaQueryableProperties;

  animation?: {
    [animationTrigger: ConfigurableAnimationProperty]: MediaQueryableProperties;
  };
}

const propertyValueMapper = (
  property: ConfigurableCssProperty,
  propertyValue?: valueof<MediaQueryableProperties>
) => {
  if (typeof propertyValue === "undefined") {
    return css`
      ${configurableCssPropertyDefaultValues[property]
        .css}: ${configurableCssPropertyDefaultValues[property].defaultValue};
    `;
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

const extendsStylingProperty = (
  props: ThemedStyledProps<StPropsConfiguration, any>,
  property: ConfigurableCssProperty
) => {
  if (!props.st) {
    return `
      ${configurableCssPropertyDefaultValues[property].css}: ${configurableCssPropertyDefaultValues[property].defaultValue};
    `;
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
