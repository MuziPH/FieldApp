import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {DieselReport} from '../models/DieselReport';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    dieselReportCollection: AngularFirestoreCollection<DieselReport>;
    dieselDoc: AngularFirestoreDocument<DieselReport>;
    dieselReports: Observable<DieselReport[]>;
    dieslreport: Observable<DieselReport>;

    constructor(private fireStore: AngularFirestore) {
        this.dieselReportCollection = this.fireStore.collection('dieselreport');

        this.dieselReports = this.dieselReportCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as DieselReport;
                const id = a.payload.doc.id;
                return {id, ...data};
            }))
        );
    }

    getAll(): Observable<DieselReport[]> {
        return this.dieselReports;
    }

    getDieselReportByID(id) {
        return this.dieselReportCollection.doc(id).valueChanges();
    }

    addDieselReport(report: DieselReport) {
        return this.dieselReportCollection.add(report);
    }

    deleteReport(id) {
        return this.dieselReportCollection.doc(id).delete();
    }
}
