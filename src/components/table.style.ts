export const TABLE_STYLE = `
/* bootstrap override: */

.data-table.table > tbody+tbody {
    border-top: none;
}
.data-table.table td {
    vertical-align: middle;
}

.data-table > thead > tr > th,
.data-table > tbody > tr > td {
	font-size: 13px;
  padding: 4px 8px;
  overflow: visible;
  border: 1px solid #e7ecf1 !important;
}

.data-table > thead > tr > th {
  text-align: center;
  vertical-align: middle;
  padding: 8px 20px 8px 8px;
}

.data-table > thead > tr > th:first-letter {
  text-transform: uppercase;
}

.data-table > thead > tr > th:nth-child(1),
.data-table > thead > tr > th:nth-child(2),
.data-table > thead > tr > th:nth-child(3) {
  padding-right: 8px;
}

/* I can't use the bootstrap striped table, because of the expandable rows */
.row-odd {
    background-color: #F6F6F6;
}
.row-even {
}

.data-table .substitute-rows > tr:hover,
.data-table .data-table-row:hover {
    background-color: #ECECEC;
}

/* header cells: */

.column-header {
    position: relative;
}
.expand-column-header {
	width: 50px;
}
.select-column-header {
	width: 50px;
	text-align: center;
}
.index-column-header {
	width: 40px;
}
.column-header.sortable {
    cursor: pointer;
}
.column-header .column-sort-icon {
  position: absolute;
  top: 25%;
  right: 5px;
}
.column-header.resizable .column-sort-icon {
    margin-right: 8px;
}
.column-header .column-sort-icon .column-sortable-icon {
    color: lightgray;
}
.column-header .column-resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 100%;
    cursor: col-resize;
}

/* cover: */

.data-table-box {
    position: relative;
}

.loading-cover {
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   top: 0;
}

.data-table-wrapper {
  position: relative;
}

data-table-header {
	position: absolute;
  right: 0;
  top: -48.5px;
}

@media (max-width: 767px) {
  .table-responsive{
    overflow: auto;
  }
}
@media (min-width: 767px) {
  .table-responsive{
    overflow: inherit !important; /* Sometimes needs !important */
  }
}

`;
