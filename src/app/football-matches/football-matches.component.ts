import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-football-matches',
  templateUrl: './football-matches.component.html',
  styleUrls: ['./football-matches.component.scss']
})

export class FootballMatchesComponent implements OnInit {
  years: number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
  selectedYear: number;
  private apiURL = "https://jsonmock.hackerrank.com/api/football_competitions?";
  selectedYearCompetition: any;
  totalMatches: number = 0;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    
  }

  onSelect(year): void {
    this.selectedYear = year;
    const rest = this.getApiResponse().subscribe(
      data => {
        this.selectedYearCompetition = data.data;
        this.totalMatches = this.selectedYearCompetition.length;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  getApiResponse(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiURL+"year="+this.selectedYear);
  }
}

export interface Match {
  name: string;
  winner: string;
}

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}
interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}
