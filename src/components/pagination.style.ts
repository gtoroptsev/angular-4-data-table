export const PAGINATION_STYLE = `
.pagination-box {
    position: relative;
}
.pagination-range {
    margin-left: 3px;
    display: inline-block;
}
.pagination-controllers {
    float: right;
}
.pagination-controllers input {
    /*padding: 1px 0px 0px 5px;*/
    text-align: right;
}

.pagination-limit {
}
.pagination-pages {
    display: inline-block;
}
.pagination-page {
    width: 84px;
    display: inline-table;
}
.pagination-page .input-group .form-control,
.pagination-page .input-group .input-group-addon {
    height: 32px;
}
.pagination-box button {
    outline: none !important;
}
.pagination-prevpage,
.pagination-nextpage,
.pagination-firstpage,
.pagination-lastpage {
    vertical-align: top;
}
.pagination-firstpage {
    border-top-left-radius: 3px !important;
    border-bottom-left-radius: 3px !important;
}
.pagination-lastpage {
    border-top-right-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
}
.pagination-reload {
    color: gray;
    font-size: 12px;
}
.pagination .input-group input {
  padding-right: 0.75rem;
}
.pagination .input-group input, .pagination .input-group .input-group-addon {
  width: 50px;
}
.page-link {
  padding: 0.
}
@media (max-width: 767px) {
  .pagination-box {
    text-align: center;
  }
  .pagination-range, .pagination-controllers {
    float: none;
    display: block;
  }
}
`;
