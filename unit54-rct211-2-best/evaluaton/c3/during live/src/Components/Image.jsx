//Complete the Custom Image component based on the props that it expects to receive

import "./Image.css"

export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <img
      className={`${fit}`}
      // className={ `${borderRadius} ${width} ${height} ` }
      // style={ `${borderRadius} ${width} ${height} ` }

      style={{
        borderRadius: `${borderRadius}%`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      // alt="alt"
      alt={alt}
      src={src}
      // borderRadius={borderradius}
      // width={width}
      // height={height}
      fit={fit}
    />
  );
};
