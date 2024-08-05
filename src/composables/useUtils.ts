const useUtils = () => {
  const capitalize = (word: string) =>
    word.slice(0, 1).toLocaleUpperCase().concat(word.slice(1));
  return {
    capitalize,
  };
};

export default useUtils;
