import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  baseURL: String = environment.baseURL;
  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name))
    console.log("url.:" + url)
    //const request = new HttpRequest('POST',url,formData);
    return this.http.post(url, formData, { observe: 'events', reportProgress: true });
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    console.log(" file no uplodfile.:"+file)
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseURL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseURL}/files`);
  }

  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob' as 'json'
    })
  }

  baixarArquivo(res, nomearquivo: string) {
    const file = new Blob([res], {
      type: res.type
    });

    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = blob;
    link.download = nomearquivo
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100)
  }
}
