import React, { useEffect, useState, useRef } from "react";
import styles from "../../../styles/components/select.module.scss";
import PropTypes from "prop-types";

export interface ISelectProps {
  variant: string;
  type: string;
  label: string;
  options: Array<String>;
}

const defaultProps = {
  variant: "default",
  type: "default",
};

type Defaultize<TSource, TKeys extends keyof TSource> = TSource &
  { [P in TKeys]-?: TSource[P] };
type DefaultProps = keyof typeof defaultProps;
type SelectProps = Defaultize<ISelectProps, DefaultProps>;

export const Select: React.FunctionComponent = (
  props: React.PropsWithChildren<SelectProps, defaultProps>
) => {
  const selectRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Не указано");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectOption = (value: string, index: number) => {
    setSelected(value);
    setSelectedIndex(index);
    setIsActive(false);
  };
  const activeSelect = () => {
    if (props.type !== "disabled") setIsActive(!isActive);
  };

  useEffect(() => {
    const onClick = (e: Event) => {
      if (!selectRef.current.contains(e.target)) setIsActive(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      className={`${styles.select} ${
        props.type === "disabled" ? styles.select_disable : ""
      } ${isActive ? styles.select_active : ""}`}
    >
      {props.variant === "withLabel" && (
        <div className={styles.select__label}>{props.label}</div>
      )}
      <div className={styles.select__body} ref={selectRef}>
        <div className={styles.select__title} onClick={() => activeSelect()}>
          <span>{selected}</span>
          <div className={styles.select__icon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.862 4.86182L13.8048 5.80463L8.00005 11.6094L2.19531 5.80463L3.13812 4.86182L8.00005 9.72375L12.862 4.86182Z"
                fill="#10243F"
              />
            </svg>
          </div>
        </div>
        {isActive && props.options && (
          <ul className={styles.select__list}>
            {props.options.map((item: string, index: number) => (
              <li
                className={`${styles.select__listItem} ${
                  index === selectedIndex ? styles.select__listItem_active : ""
                }`}
                key={index}
                onClick={() => selectOption(item, index)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

/* для обозначения типа в документации */
Select.propTypes = {
  variant: PropTypes.oneOf(["default", "withLabel"]),
  type: PropTypes.oneOf(["default", "disabled"]),
  label: PropTypes.string,
  options: PropTypes.node,
};
