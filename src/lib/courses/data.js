export const fetchCourses = async (searchTerm = "") => {
  console.log();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/courses?search=${searchTerm}`,
  );
  const data = await res.json();
  return data || [];
};

export const fetchFeaturedCourses = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};
