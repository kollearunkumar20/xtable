import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const sortByDate = () => {
    const sorted = [...tableData].sort((a, b) => {
      const dateCompare = new Date(b.date) - new Date(a.date); // Latest first
      if (dateCompare !== 0) return dateCompare;
      return b.views - a.views; // If same date → higher views first
    });
    setTableData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...tableData].sort((a, b) => {
      const viewCompare = b.views - a.views; // Higher views first
      if (viewCompare !== 0) return viewCompare;
      return new Date(b.date) - new Date(a.date); // If same views → latest first
    });
    setTableData(sorted);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Date and Views Table</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews} style={{ marginLeft: "10px" }}>
          Sort by Views
        </button>
      </div>

      <table border="1" style={{ margin: "0 auto", width: "60%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
