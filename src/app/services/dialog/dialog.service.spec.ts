import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

import { DialogService } from './dialog.service';


describe('DialogService', () => {
  let service: DialogService;
  let dialogSpy: jasmine.Spy;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule]
    });

    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open dialog ', () => {
    let dialogSpy: jasmine.Spy;
    let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of("messageItem.info"), close: null });

    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open').and.returnValue(dialogRefSpyObj);

    service.openMovieDetail({
      "id": "70128696",
      "title": "The Bounty Hunter",
      "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVBiRneY0Grcd0Gl1RSxQJ-z7zPrw6qp6tJH-5LGrSu4HVCNpqZOHUdWJxci1pI_81lHPS4rzhngtNv2CqcB4pK4NQ.jpg?r=0e0",
      "synopsis": "Bounty hunter Milo Boyd finds his latest assignment downright satisfying as he learns that the bail-jumper he must chase down is his ex-wife, Nicole.<br><b>New on 2020-06-18</b>",
      "rating": "5.6",
      "type": "movie",
      "released": "2010",
      "runtime": "1h50m",
      "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcliFYooogEaCZGSVn1QZcpEpsbvT3gBLN7ftngjMbrTntNlK6a2B1ZSwIdKYPSXXtbA9zsXB_Xv0yTEqwYiss24HvkU.jpg?r=0e0",
      "unogsdate": "2020-06-18",
      "imdbid": "tt1038919",
      "download": "1"
    });
    expect(dialogSpy).toHaveBeenCalled();
  });

  it('should close all dialogs ', () => {
    let dialogSpy: jasmine.Spy;
    let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of("messageItem.info"), close: null });

    dialogSpy = spyOn(TestBed.inject(MatDialog), 'closeAll').and.returnValue(dialogRefSpyObj);

    service.closeDialog();
    expect(dialogSpy).toHaveBeenCalled();
  });
});
