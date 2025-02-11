package vn.edu.tnut.btvn_android_26_12_k215480106120;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView webView = findViewById(R.id.main_view);

        // Cấu hình WebView
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true); // Kích hoạt JavaScript nếu cần

        // Đảm bảo nội dung hiển thị trong WebView thay vì mở trình duyệt
        webView.setWebViewClient(new WebViewClient());

        // Tải tệp HTML từ thư mục assets
        webView.loadUrl("file:///android_asset/index.html");
    }
}
