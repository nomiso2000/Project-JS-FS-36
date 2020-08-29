import { APIhelpers } from '../../helpers';
import API from '../../api_services';
import { totalResults } from '../header/navigation/navigation.js';

import { info, getProps } from '../../helpers';

export const Pagination = {
  code: '',
  size: function () {
    return Math.ceil(totalResults / 9);
  }, // pages size
  page: APIhelpers.page, // selected page
  step: 2, // pages before and after current

  // add pages by number (from [s] to [f])
  Add: function (s, f) {
    for (var i = s; i < f; i++) {
      Pagination.code += '<a>' + i + '</a>';
    }
  },

  // add last page with separator
  Last: function () {
    if (info.isMobile) {
      return;
    }
    Pagination.code += '<i>...</i><a>' + Pagination.size() + '</a>';
  },

  // add first page with separator
  First: function () {
    if (info.isMobile) {
      return;
    }
    Pagination.code += '<a>1</a><i>...</i>';
  },

  // change page
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();

    APIhelpers.page = Number(event.target.textContent);
    API.getMovies()
  },

  // previous page
  Prev: function () {
    Pagination.page--;
    if (Pagination.page < 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },

  // next page
  Next: function () {
    Pagination.page++;
    if (Pagination.page > Pagination.size()) {
      Pagination.page = Pagination.size();
    }
    Pagination.Start();
  },

  // binding pages
  Bind: function () {
    var a = Pagination.e.getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) a[i].className = 'activePage';
      a[i].addEventListener('click', Pagination.Click, false);
    }
  },

  // write pagination
  Finish: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = '';
    Pagination.Bind();
  },

  // find pagination type
  Start: function () {
    if (Pagination.size() < Pagination.step * 2 + 6) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      if (info.isMobile) {
        Pagination.Add(1, Pagination.step * 2 + 2);
      } else {
        Pagination.Add(1, Pagination.step * 2 + 4);
      }
      Pagination.Last();
    } else if (Pagination.page > Pagination.size() - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(
        Pagination.size() - Pagination.step * 2 - 2,
        Pagination.size() + 1,
      );
    } else {
      Pagination.First();
      Pagination.Add(
        Pagination.page - Pagination.step,
        Pagination.page + Pagination.step + 1,
      );
      Pagination.Last();
    }
    Pagination.Finish();
  },

  // binding buttons
  Buttons: function (e) {
    var nav = e.getElementsByTagName('div');
    nav[0].addEventListener('click', Pagination.Prev, false);
    nav[1].addEventListener('click', Pagination.Next, false);
  },

  // create skeleton
  Create: function (e) {
    var html = [
      '<div class="arrowLeftWrapper"><img class="al" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjY2NjYgOEgzLjMzMzI1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuMzMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy45OTk5MiAxMi42NjY3TDMuMzMzMjUgOC4wMDAwNEw3Ljk5OTkyIDMuMzMzMzciIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS4zMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="></></div>', // previous button
      '<span class="pages_list"></span>', // pagination container
      '<div class="arrowRightWrapper"><img class="ar" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zLjMzMzI5IDhIMTIuNjY2NiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik03Ljk5OTk2IDEyLjY2NjdMMTIuNjY2NiA4LjAwMDA0TDcuOTk5OTYgMy4zMzMzNyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"></></div>', // next button
    ];

    e.innerHTML = html.join('');
    Pagination.e = e.getElementsByTagName('span')[0];
    Pagination.Buttons(e);
  },

  Init: function (data) {
    Pagination.Create(document.getElementById('pagination'));
    Pagination.Start();
  },
};
