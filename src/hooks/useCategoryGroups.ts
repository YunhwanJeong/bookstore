function useCategoryGroups() {
  const categoryGroups = [
    {
      label: 'Fiction',
      items: [
        {
          value: 'mystery',
          label: 'Mystery',
        },
        {
          value: 'suspense',
          label: 'Suspense',
        },
        {
          value: 'thriller',
          label: 'Thriller',
        },
        {
          value: 'romance',
          label: 'Romance',
        },
        {
          value: 'manga',
          label: 'Manga',
        },
        {
          value: 'literary-fiction',
          label: 'Literary Fiction',
        },
      ],
    },
    {
      label: 'Non-Fiction',
      items: [
        {
          value: 'self-help',
          label: 'Self-Help',
        },
        {
          value: 'wellness',
          label: 'Wellness',
        },
        {
          value: 'business',
          label: 'Business',
        },
        {
          value: 'cookbooks',
          label: 'Cookbooks',
        },
      ],
    },
  ];

  return {
    categoryGroups,
  };
}

export default useCategoryGroups;
