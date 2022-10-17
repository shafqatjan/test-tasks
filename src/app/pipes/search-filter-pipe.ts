import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
      name: "searchFilter"
})
export class SearchFilterPipe implements PipeTransform {
      transform(value: any, args: any): any {
            console.log(value, args)
            if (!value) return [];
            if (!args) return value;
            args = args.toLowerCase();

            // debugger;
            return value.filter(function (item: any) {
                  console.log(item.Headers)
                  return JSON.stringify(item.Headers).toLowerCase().includes(args);
            })
      }
}