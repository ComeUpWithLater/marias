const XYZ = ({ props }: { props: any }) => {
  return `
    width: ${props.width || 'auto'};
    height: ${props.height || 'auto'};
    z-index: ${props.zIndex || '1'};
    `;
};
export default XYZ;
