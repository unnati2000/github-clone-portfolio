// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default getData = async () => {
  const res = await fetch("https://api.github.com/unnati2000");
  const data = await res.json();
  return {
    props: { data: data },
  };
};
