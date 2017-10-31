export const PAGINATION_TEMPLATE = `
<div class="pagination-box">
    <div class="pagination-range">
        <div class="pagination-limit">
            <div class="input-group">
              <label>
                <div class="btn-group mr-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-secondary" [class.active]="limit === 10" (click)="limit = 10">10</button>
                  <button type="button" class="btn btn-secondary" [class.active]="limit === 25" (click)="limit = 25">25</button>
                  <button type="button" class="btn btn-secondary" [class.active]="limit === 50" (click)="limit = 50">50</button>
                  <button type="button" class="btn btn-secondary" [class.active]="limit === 100" (click)="limit = 100">100</button>
                </div>
                <select #limitInput class="input-sm hidden"
                        [ngModel]="limit" (change)="limit = limitInput.value">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                </select>
                Showing
                <span [textContent]="dataTable.offset + 1"></span>
                to
                <span [textContent]="[dataTable.offset + dataTable.limit , dataTable.itemCount] | min"></span>
                of
                <span [textContent]="dataTable.itemCount"></span>
                records
              </label>
            </div>
        </div>
    </div>
    <div class="pagination-controllers">
        <div class=" pagination-pages">
            <button [disabled]="dataTable.offset <= 0" (click)="pageFirst()" class="btn btn-default pagination-firstpage">&laquo;</button>
            <button [disabled]="dataTable.offset <= 0" (click)="pageBack()" class="btn btn-default pagination-prevpage">&lsaquo;</button>
            <div class="pagination-page">
                <div class="input-group">
                  <input #pageInput type="number" class="form-control" min="1" step="1" max="{{maxPage}}"
                           [ngModel]="page" (blur)="page = pageInput.value"
                           (keyup.enter)="page = pageInput.value" (keyup.esc)="pageInput.value = page"/>
                  <span class="input-group-addon" id="btnGroupAddon" [textContent]="'/ ' + dataTable.lastPage">
                  </span>
                </div>
            </div>
            <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount" (click)="pageForward()" class="btn btn-default pagination-nextpage">&rsaquo;</button>
            <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount" (click)="pageLast()" class="btn btn-default pagination-lastpage">&raquo;</button>
        </div>
    </div>
</div>
`;
