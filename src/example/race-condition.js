function Article({ id }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        let didCancel = false;
        async function fetchData() {
            const article = await API.fetchArticle(id);
            if (!didCancel) {
                setArticle(article);
            }
        }

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [id]);

}