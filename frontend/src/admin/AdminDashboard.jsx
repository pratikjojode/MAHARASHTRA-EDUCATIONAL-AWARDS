import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  FaSync,
  FaExclamationTriangle,
  FaTable,
  FaClipboardList,
  FaFileExport,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
  FaEye,
} from "react-icons/fa";
import { Modal } from "antd";
import "../styles/AdminDashboard.css";
import { exportToCSV } from "../../../backend/utils/exportUtils";

function AdminDashboard() {
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleColumns, setVisibleColumns] = useState({});
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api/v1/forms/form/responses", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_ADMIN_SECRET}`,
        },
      });
      setResponses(res.data.data);

      if (res.data.data.length > 0) {
        const allColumns = Object.keys(res.data.data[0]);
        const initialVisible = {};

        // Default visible columns (first 4 + email)
        const defaultVisible = [
          "Timestamp",
          "1. Institution Name",
          "2. Institution Type",
          "Email address",
        ];

        allColumns.forEach((col) => {
          initialVisible[col] = defaultVisible.includes(col);
        });

        setVisibleColumns(initialVisible);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch responses. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredData = useMemo(() => {
    return responses.filter((row) =>
      Object.entries(row).some(([val]) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [responses, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  const handleExport = () => {
    exportToCSV(filteredData, "form-responses");
  };

  const toggleColumnVisibility = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const showResponseDetails = (response) => {
    setSelectedResponse(response);
    setViewModalVisible(true);
  };

  const handleColumnSelectAll = (e) => {
    const newVisible = {};
    Object.keys(visibleColumns).forEach((col) => {
      newVisible[col] = e.target.checked;
    });
    setVisibleColumns(newVisible);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header-container">
        <h2 className="dashboard-header">
          <FaTable /> Form Responses
        </h2>

        <div className="dashboard-actions">
          <button onClick={handleExport} className="export-button">
            <FaFileExport /> Download to CSV
          </button>
          <button onClick={fetchData} className="refresh-button">
            <FaSync /> Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <FaExclamationTriangle /> {error}
        </div>
      )}

      <div className="dashboard-controls">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search responses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <div className="filter-container">
            <FaFilter className="filter-icon" />
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>

          <div className="column-selector">
            <button
              className="column-selector-button"
              onClick={(e) => {
                e.stopPropagation();
                document
                  .getElementById("column-dropdown")
                  .classList.toggle("show");
              }}
            >
              Columns <FaChevronDown />
            </button>
            <div id="column-dropdown" className="column-dropdown">
              <div className="column-select-all">
                <label>
                  <input
                    type="checkbox"
                    checked={Object.values(visibleColumns).every((v) => v)}
                    onChange={handleColumnSelectAll}
                  />
                  Select All
                </label>
              </div>
              {responses[0] &&
                Object.keys(responses[0]).map((column) => (
                  <label key={column} className="column-option">
                    <input
                      type="checkbox"
                      checked={visibleColumns[column]}
                      onChange={() => toggleColumnVisibility(column)}
                    />
                    <span className="column-name">{column}</span>
                  </label>
                ))}
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading responses...</p>
        </div>
      ) : filteredData.length === 0 ? (
        <div className="no-responses">
          <FaClipboardList size={48} />
          <p>No matching responses found</p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="clear-search-button"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="table-container">
            <div className="table-scroll-wrapper">
              <table className="responses-table">
                <thead>
                  <tr>
                    <th className="action-column">View</th>
                    {responses[0] &&
                      Object.keys(responses[0]).map(
                        (key) =>
                          visibleColumns[key] && (
                            <th key={key}>
                              <div className="th-content">
                                <span className="column-header">{key}</span>
                              </div>
                            </th>
                          )
                      )}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((res, i) => (
                    <tr key={i}>
                      <td className="action-cell">
                        <button
                          onClick={() => showResponseDetails(res)}
                          className="view-button"
                        >
                          <FaEye />
                        </button>
                      </td>
                      {Object.entries(res).map(
                        ([key, val]) =>
                          visibleColumns[key] && (
                            <td key={key}>
                              <div className="cell-content">
                                {String(val).length > 30
                                  ? `${String(val).substring(0, 30)}...`
                                  : val}
                              </div>
                            </td>
                          )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <div className="page-info">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}

      <Modal
        title="Response Details"
        visible={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={null}
        width="80%"
        className="response-modal"
      >
        {selectedResponse && (
          <div className="response-details">
            {Object.entries(selectedResponse).map(([key, val]) => (
              <div key={key} className="detail-row">
                <div className="detail-label">{key}:</div>
                <div className="detail-value">
                  {val || <span className="empty-value">N/A</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default AdminDashboard;
