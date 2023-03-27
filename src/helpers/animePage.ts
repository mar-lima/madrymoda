type Props = {
  pagewin?: Function;
};
export const animation = {
  anime: () => {
    var win;
    return (win = window.scrollY + (window.innerHeight * 3) / 4);
  },
};
